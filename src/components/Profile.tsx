import React from "react";
import styled from "styled-components";

const Profiles = styled.div`
  background-color: #15181d;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  background-image: url(https://img.lostark.co.kr/armory/8/536a9bbe5461dfd7683111ba469d470dc2f12e5ef0783b84d881f29a75cf7208.png?v=20240131150824);
`;

const Profiled = styled.dl`
  display: flex;
  margin: 0;
  padding-left: 0.5rem;
  padding-bottom: 0.25rem;
  padding-right: 0;
  align-items: center;
`;

const ProfileTitle = styled.dt`
  font-size: 14px;
  font-weight: 500;
  padding: 0.25em 0.6em;
  border-radius: 10rem;
  background-color: #313233;
  line-height: 1;
  margin: 0 0.25rem 0 0;
  color: #ffffff;
`;

const ProfileContentBox = styled.dd`
  color: #ffffff;
  font-size: 14px;
`;

const ProfileContent = styled.span``;

function Profile() {
  return (
    <>
      <Profiles>
        상세 정보
        <Profiled>
          <ProfileTitle>&nbsp;서&nbsp;&nbsp;&nbsp;버&nbsp;</ProfileTitle>
          <ProfileContentBox>
            <ProfileContent>서버&nbsp;이름</ProfileContent>
          </ProfileContentBox>
        </Profiled>
        <Profiled>
          <ProfileTitle>&nbsp;길&nbsp;&nbsp;&nbsp;드&nbsp;</ProfileTitle>
          <ProfileContentBox>
            <ProfileContent>길드&nbsp;이름</ProfileContent>
          </ProfileContentBox>
        </Profiled>
        <Profiled>
          <ProfileTitle>&nbsp;클래스&nbsp;</ProfileTitle>
          <ProfileContentBox>
            <ProfileContent>직업&nbsp;이름</ProfileContent>
          </ProfileContentBox>
        </Profiled>
        <Profiled>
          <ProfileTitle>&nbsp;칭&nbsp;&nbsp;&nbsp;호&nbsp;</ProfileTitle>
          <ProfileContentBox>
            <ProfileContent>칭호&nbsp;이름</ProfileContent>
          </ProfileContentBox>
        </Profiled>
        <Profiled>
          <ProfileTitle>&nbsp;전&nbsp;&nbsp;&nbsp;투&nbsp;</ProfileTitle>
          <ProfileContentBox>
            <ProfileContent>60</ProfileContent>
          </ProfileContentBox>
        </Profiled>
        <Profiled>
          <ProfileTitle>&nbsp;아이템&nbsp;</ProfileTitle>
          <ProfileContentBox>
            <ProfileContent>아이템&nbsp;이름</ProfileContent>
          </ProfileContentBox>
        </Profiled>
        <Profiled>
          <ProfileTitle>&nbsp;원정대&nbsp;</ProfileTitle>
          <ProfileContentBox>
            <ProfileContent>300</ProfileContent>
          </ProfileContentBox>
        </Profiled>
        <Profiled>
          <ProfileTitle>&nbsp;P&nbsp;V&nbsp;P&nbsp;&nbsp;</ProfileTitle>
          <ProfileContentBox>
            <ProfileContent>20급</ProfileContent>
          </ProfileContentBox>
        </Profiled>
        <Profiled>
          <ProfileTitle>&nbsp;영&nbsp;&nbsp;&nbsp;지&nbsp;</ProfileTitle>
          <ProfileContentBox>
            <ProfileContent>영지&nbsp;이름</ProfileContent>
          </ProfileContentBox>
        </Profiled>
      </Profiles>
    </>
  );
}

export default Profile;
