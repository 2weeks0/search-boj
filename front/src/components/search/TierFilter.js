import FilterButton from "./FilterButton";

export default function TierFilter() {
  const tierImgList = [];
  for (let i = 1; i <= 30; i++) {
    if (i % 5 === 1) {
      tierImgList.push(`${i}-a`);
    }
    tierImgList.push(`${i}`);
  }

  return (
    <div>
      <h5>티어 필터</h5>
      {[0, 1, 2].map((it) => (
        <div className="row">
          {tierImgList.slice(12 * it, 12 * (it + 1)).map((it) => (
            <div className="col-1" key={it}>
              <FilterButton>
                <img src={`https://d2gd6pc034wcta.cloudfront.net/tier/${it}.svg`} alt={it} />
              </FilterButton>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
