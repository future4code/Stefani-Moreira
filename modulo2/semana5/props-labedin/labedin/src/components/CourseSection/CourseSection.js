import React from 'react';
import styled from 'styled-components';

const CourseCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

const ImgCourseCardContainer = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 30%;
`
const HeadingCourseCardContainer = styled.h4 `
    margin-right: 5px;
`
const DescriptionCourseCardContainer = styled.div `
    display: flex;
    justify-items: flex-start;

    p {
        margin-top: 21px;
    }
`

function CourseSection(props) {
    return (
        <CourseCardContainer>
            <ImgCourseCardContainer src={ props.image } />
            <DescriptionCourseCardContainer>
                <HeadingCourseCardContainer>{ props.title }</HeadingCourseCardContainer>
                <p>{ props.description }</p>
            </DescriptionCourseCardContainer>
        </CourseCardContainer>
    );
}

export default CourseSection;