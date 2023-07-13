import { useState } from 'react';

const More = ({ data }) => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  const classN = `more${seeMore ? ' active' : ''}`;
  const label = seeMore ? 'Ver menos -' : 'Ver mais +';

  return (
    <>
      <h4 className={classN}>{data.text}</h4>
      <button onClick={handleSeeMore}>{label}</button>
    </>
  );
};

export default More;
