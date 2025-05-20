import React, { useEffect, useState } from "react";
import "./MainBox.css";
import SearchBar from "./SearchBar";
import ImgBox from "./ImgBox";
import axios from "axios";

const MainBox = () => {
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);
  const [data4, setdata4] = useState([]);
  const [data5, setdata5] = useState([]);
  const [data6, setdata6] = useState([]);

  const getData = async () => {
    const response1 = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );

    const response2 = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=31"
    );

    const response3 = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=29"
    );

    const response4 = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=28"
    );

    const response5 = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=32"
    );

    const response6 = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=33"
    );

    setdata1(response1.data);
    setdata2(response2.data);
    setdata3(response3.data);
    setdata4(response4.data);
    setdata5(response5.data);
    setdata6(response6.data);

    console.log(data1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="w-[1456] h-screen">
        <SearchBar />

        <div className="mt-[15px] ml-[20px] flex gap-[15px]">
          <div className="flex flex-col gap-[30px]">
            {data1.map(function (elem, idx) {
              return (
                <ImgBox key={idx} image={elem.download_url} />
                // </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-[30px]">
            {data2.map(function (elem, idx) {
              return (
                <ImgBox key={idx} image={elem.download_url} />
                // </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-[30px]">
            {data3.map(function (elem, idx) {
              return (
                <ImgBox key={idx} image={elem.download_url} />
                // </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-[30px]">
            {data4.map(function (elem, idx) {
              return (
                <ImgBox key={idx} image={elem.download_url} />
                // </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-[30px]">
            {data5.map(function (elem, idx) {
              return (
                <ImgBox key={idx} image={elem.download_url} />
                // </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-[30px]">
            {data6.map(function (elem, idx) {
              return (
                <ImgBox key={idx} image={elem.download_url} />
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
