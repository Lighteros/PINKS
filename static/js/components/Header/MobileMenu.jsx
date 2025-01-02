function MobileMenu({ isOpen,onClick }){
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isOpen ? "open" : ""}
      onClick={onClick}
    >
      <rect
        x="0.5"
        y="0.500244"
        width="27"
        height="27"
        rx="13.5"
        stroke="white"
      />
      {isOpen ? (
        <>
          <path
            d="M8.74902 9.20249L19.2494 17.3692"
            stroke="white"
            strokeWidth="1.3625"
            className="line"
          />
          <path
            d="M8.74902 17.3692L19.2494 9.20249"
            stroke="white"
            strokeWidth="1.3625"
            className="line"
          />
        </>
      ) : (
        <>
          <path
            d="M8.74902 9.20249H19.2494"
            stroke="white"
            strokeWidth="1.3625"
            className="line top"
          />
          <path
            d="M8.74902 13.2858H19.2494"
            stroke="white"
            strokeWidth="1.3625"
            className="line middle"
          />
          <path
            d="M8.74902 17.3692H19.2494"
            stroke="white"
            strokeWidth="1.3625"
            className="line bottom"
          />
        </>
      )}
      <style>{`.line {transition: all 0.3s ease;}`}</style>
    </svg>
  )
}

export default MobileMenu