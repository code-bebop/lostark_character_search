import { AxiosError } from "axios";
import { UseQueryResult } from "react-query";
import styled from "styled-components";

import { ViewWrapper } from "../components/Common/ViewWrapper";
import { BasicResponse } from "../type/basicResponse";

const ErrorWrapper = styled(ViewWrapper)`
  margin: 270px auto 0;
  text-align: center;
`;

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
      <ErrorWrapper>
        <p>{data.result_error}</p>
      </ErrorWrapper>
    );
  }

  return data;
}

export default profileQueryAnalyzer;
