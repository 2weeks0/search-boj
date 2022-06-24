import { useSelector, useDispatch } from "react-redux";

import { selectTierFilter, filterTier, filterTierAll } from "../../store/slices/filterSlice";

import FilterButton from "./FilterButton";

export default function TierFilter() {
  const tierFilter = useSelector(selectTierFilter);

  const dispatch = useDispatch();

  const tierImgList = [];
  for (let i = 1; i <= 30; i++) {
    if (i % 5 === 1) {
      tierImgList.push(`${i}-a`);
    }
    tierImgList.push(i);
  }

  const handleClick = (tier) => {
    if (typeof tier === "string") {
      dispatch(filterTierAll(tier));
    } else {
      dispatch(filterTier(tier));
    }
  };

  return (
    <div>
      <h5>티어 필터</h5>
      {[0, 1, 2].map((it) => (
        <div className="row" key={it}>
          {tierImgList.slice(12 * it, 12 * (it + 1)).map((it, idx) => {
            let active = true;
            if (idx % 6 === 0) {
              const tier = +it.substring(0, it.length - 2);
              for (let i = 0; i < 5; i++) {
                if (!tierFilter.includes(i + tier)) {
                  active = false;
                  break;
                }
              }
            } else {
              active = tierFilter.includes(it);
            }

            return (
              <div className="col-1" key={it}>
                <FilterButton active={active} onClick={() => handleClick(it)}>
                  <img src={`https://d2gd6pc034wcta.cloudfront.net/tier/${it}.svg`} alt={it} />
                </FilterButton>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
