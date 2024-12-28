interface SliderProps {
    isSlided: boolean;
    options: string[];
    onChangeValue: (isSlided: boolean) => void;
};

const Slider = ({ isSlided, options, onChangeValue}: SliderProps) => {
  return (
    <div className="slider">
        { options.map((item, index) => <span key={index}>{item}</span>) }
        <div className={`slide ${isSlided && 'active'}`} onClick={() => onChangeValue(!isSlided)}></div>
    </div>
  )
}

export default Slider;





        // {/* Language */}
        // <div className="slider">
        //   <span>FR</span>
        //   <span>EN</span>
        //   <div className="slide"></div>
        // </div>

        // {/* Mode */}
        // <div className="slider">
        //   <span>Dark</span>
        //   <span>Light</span>
        //   <div className="slide"></div>
        // </div>