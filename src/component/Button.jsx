const Button = ({ className, buttonName }) => {
  return (
    <div>
      <a
        href="#"
        className={`font-nunito font-semibold text-[18px] text-[#fff] leading-[200%] py-[14px] px-[28px] bg-[#8454F5]  inline-block ${className}`}
      >
        {buttonName}
      </a>
    </div>
  );
};
export default Button;
