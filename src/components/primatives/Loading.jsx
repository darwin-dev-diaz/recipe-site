import loadingGif from "../../assets/images/loading.gif";

function Loading() {
  return (
    <div className="h-[75vh] w-full flex justify-center items-center">
      <img className="mx-auto w-24" src={loadingGif} />
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
