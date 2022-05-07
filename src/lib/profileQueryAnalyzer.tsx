import { AxiosError } from "axios";
import { UseQueryResult } from "react-query";
import { BasicResponse } from "../type/basicResponse";

function profileQueryAnalyzer<ResponseT extends BasicResponse>({
  data,
  isLoading,
  isIdle,
  isError,
}: UseQueryResult<ResponseT, AxiosError<any, any>>) {
  if (isLoading || isIdle) {
    return <p>로딩 중 . . .</p>;
  }
  if (typeof data === "undefined") {
    return <p>데이터가 undefined인 상태입니다.</p>;
  }
  if (isError || data.result === "Error") {
    return (
      <>
        <p>에러 발생</p>
        <p>{data.result_error}</p>
      </>
    );
  }

  return data;
}

export default profileQueryAnalyzer;