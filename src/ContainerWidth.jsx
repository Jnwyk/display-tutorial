import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export default function ContainerWidth({
  handleSliderChange,
  maxDisplayWidth,
}) {
  return (
    <div className="flexbox__container">
      <RangeSlider
        defaultValue={[0, maxDisplayWidth]}
        min={242}
        max={maxDisplayWidth}
        thumbsDisabled={[true, false]}
        onInput={(sliderValues) => handleSliderChange(sliderValues[1])}
      />
    </div>
  );
}
