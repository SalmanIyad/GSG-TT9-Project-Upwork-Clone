const TextSeprator = ({ content, spanColor="#8F8E8E" }) => {
  return (
    <div className='text_serprator'>
      <span className={`text-[${spanColor}]`}></span>
      <div className='text'>{content}</div>
      <span className={`text-[${spanColor}]`}></span>
    </div>
  );
}
export default TextSeprator