import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css';
const Blog = () => {
    return (
        <Container className='blogs'>
            <div className='blog-heading mt-3'>
                <h2><span className='blog'>What is context API?</span> </h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.A component that will wrap the provider named Provider.Consumer as it so happens is a component that consumes and uses the state.e.g-- <code>userContext.js</code></p>
            </div>
            <div className='blog-heading'>
                <h2><span className='blog'>What is semantic tag?</span> </h2>
                <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation.It also describes the type of content that the element should contain.Semantic tags also help search engines to parse the webpage correctly and find accurate information.Examples of semantic HTML tags include: 
                    <li>Header</li>
                    <li>footer</li>
                    <li>aside</li>
                    <li>article</li>
                    <li>aside</li>
                    <li>navbar</li>
                    </p>
            </div>
            <div className='blog-heading'>
                <h2><span className='blog'>What is the difference between inline block and inline block elements?</span> </h2>
                <p>Displays an element as an inline element. Any height and width properties will have no effect.Here are a few elements that have a default inline property:
                    <li>span</li>
                    <li>a</li>
                    <li>img</li>
                    <li>em</li>
                    <li>strong</li>
                    <li>small</li>
                Displays an element as an inline-level block container. You can set height and width values.Here are a few elements that have a default block property:
                <li>div</li>
                <li>h1</li>
                <li>p</li>
                <li>li</li>
                <li>section</li>
                </p>
            </div>
        </Container>
    );
};

export default Blog;