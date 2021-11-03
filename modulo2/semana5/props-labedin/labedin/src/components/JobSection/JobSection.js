import React from 'react';
import styled from 'styled-components';

const JobCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`

const HeadingJobCardContainer = styled.h4 `
    margin-bottom: 5px;
`
const DescriptionJobCardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function JobCard(props) {
    return (
        <JobCardContainer>
            <DescriptionJobCardContainer>
                <HeadingJobCardContainer>{ props.title }</HeadingJobCardContainer>
                <p>{ props.description }</p>
            </DescriptionJobCardContainer>
        </JobCardContainer>
    );
}

export default JobCard;