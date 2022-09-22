import { memo } from 'react';

import { Link } from 'react-router-dom';

import { EmptyHeartSVG, FilledHeartSVG } from 'assets/svg';
import { BROWSER_PATH } from 'constants/path';
import { GroupSummary } from 'types/data';
import { getCategoryImage } from 'utils/category';
import { convertDeadlineToRemainTime } from 'utils/date';

import * as S from './index.styled';

interface CardProps {
  group: GroupSummary;
}

function Card({ group }: CardProps) {
  const {
    id,
    name,
    categoryId,
    host,
    deadline,
    finished,
    numOfParticipant,
    capacity,
    like,
  } = group;

  return (
    <Link to={`${BROWSER_PATH.DETAIL}/${id}`}>
      <S.Container finished={finished}>
        <S.Image imgSrc={getCategoryImage(categoryId)} />
        <S.Description>
          <S.Left>
            <div>
              <S.Title>{name}</S.Title>
              <S.HostName>{host.name}</S.HostName>
            </div>
            <S.Capacity>
              <span>{numOfParticipant}</span>명 / 최대 <span>{capacity}</span>명
            </S.Capacity>
          </S.Left>
          <S.Right>
            <S.Deadline>
              {finished ? '마감 완료' : convertDeadlineToRemainTime(deadline)}
            </S.Deadline>
            <S.Liked>{like ? <FilledHeartSVG /> : <EmptyHeartSVG />}</S.Liked>
          </S.Right>
        </S.Description>
      </S.Container>
    </Link>
  );
}

export default memo(Card);
