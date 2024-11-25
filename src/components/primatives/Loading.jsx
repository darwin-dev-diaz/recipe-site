import loadingGif from "../../assets/images/loading.gif";

function Loading() {
  return (
    <div className="h-[75vh] w-full flex justify-center items-center">
      <img className="mx-auto w-24" src={loadingGif} />
      <h2 className="mb-6 text-lg font-bold uppercase">
            Fetching API, this may take a bit...
          </h2>
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
