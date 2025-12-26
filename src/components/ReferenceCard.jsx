const ReferenceCard = ({ data }) => {
  return (
    <div className="reference">
      <p>{data.answer}</p>
      <small>
        Source: {data.source} | Page {data.page}
      </small>
    </div>
  );
};

export default ReferenceCard;
