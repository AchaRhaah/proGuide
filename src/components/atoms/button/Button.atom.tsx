function Button({
  btnText,
  onClick,
}: {
  btnText: string;
  onClick: () => void;
}) {
  return (
    <button
      className="out outline-none w-28 h-10 bg-primary rounded-xl text-white hover:bg-[#0654fba8]"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

export default Button;
