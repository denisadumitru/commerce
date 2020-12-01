import { useQuery } from "react-query";
import axios from "axios";

const url = 'http://bestmall.ro/'

const getMain = async () => {
  const { data } = await axios.get(
    `${url}`
  );
  return data;
};

export default function useMain() {
  return useQuery("main", getMain, {retry: false});
}