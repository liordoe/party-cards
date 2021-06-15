import React, { FC, useState } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { flip } from 'react-animations';

const StyledCard = styled.div`
  cursor: pointer;
  user-select: none;
  margin: 20px;
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36pt;
  background-color: #edd5ff;

  // ${(props: any) => props.clicked && `
  //   animation: .5s ${flip}
  // `}
`;

export const Card: FC = (props: any) => {
    const [open, switchOpen] = useState<boolean>(false);
    const [clicked, changeClicked] = useState<boolean>(false);
    const onCardClick = (e: unknown) => {
        console.log('clicked', e);
        // changeClicked(true);
    };
    const onAnimationEnd = () => {
        changeClicked(false);
        switchOpen(!open);
    };
    const classNames = classnames(props.className, {
        open,
        clicked
    });

    return (
        <StyledCard className={classNames}
                    onClick={onCardClick}
                    onAnimationEnd={onAnimationEnd}>
            Styled Card
            <button onClick={event => console.log(event)}>Click</button>
        </StyledCard>
    );
};
