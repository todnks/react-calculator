export default function Operation({ symbols, onClick }) {

  const handlerOnClick = () => {
    onClick(symbols);
  }
  return (
    < button
      onClick={handlerOnClick}
    >
      {symbols}
    </button >
  )
    ;
}