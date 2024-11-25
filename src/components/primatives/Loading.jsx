import loadingGif from "../../assets/images/loading.gif";

function Loading() {
  return (
    <div className="flex h-[75vh] w-full flex-col items-center justify-center">
      <img className="mx-auto w-24" src={loadingGif} />
      <h2 className="mb-6 text-lg font-bold uppercase">
        Fetching API, this may take a bit...
      </h2>
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
