import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [dataApi, setDataApi] = useState([]);
  const [internetControl, setInternetControl] = useState(
    window.navigator.onLine
  );

  useEffect(() => {
    const handleOnline = () => {
      setInternetControl(true);
    };

    const handleOffline = () => {
      setInternetControl(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const dataApiFunct = async () => {
      try {
        const jsonData = await fetch(url);
        const converterJsonData = await jsonData.json();
        setLoading(false);
        setDataApi(converterJsonData);
      } catch (error) {
        setDataApi([]);
        setLoading(true); // sürekli yükleme göster
        console.error(
          internetControl
            ? `İnternet bağlı ama veri çekilemedi: ${error}`
            : "İnternete bağlı değil. Bu yüzden veri çekilemedi"
        );
      }
    };

    dataApiFunct();

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [url]);

  return { loading, dataApi,internetControl };
};

export default useFetch;
