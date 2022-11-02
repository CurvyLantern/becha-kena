const UpperPart = () => {
  return (
    <p className="text-md h-36 font-thin flex-1 pb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quisquam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quisquam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quisquam.
    </p>
  );
};

const LowerPart = () => {
  return (
    <section className="flex items-center gap-4 pt-4">
      <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center">
        Avatar
      </div>
      <div>
        <h3 className="font-semibold text-md tracking-wide">Nasim</h3>
        <div className="text-orange-500">Stars</div>
      </div>
    </section>
  );
};

const ReviewCard = () => {
  return (
    <div className="w-80 flex flex-col p-4 rounded-md border-2 shadow-md">
      <UpperPart />
      <hr />
      <LowerPart />
    </div>
  );
};

export default ReviewCard;
