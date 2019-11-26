import React, { Fragment, Component, useRef, useEffect, useState } from 'react';
import styles from './styles';
import { withStyles, Typography } from '@material-ui/core';
import { classNames } from '../../lib/';

const padding = 32;

const Book = ({ content, restProps }) => {
  const classes = styles();
  const fpRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(null);
  const [pages, setPages] = useState([]);
  const [pageWidth, setPageWidth] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const frontPage = classNames(
    classes.bookPage,
    classes.bookFrontPage,
    pageNumber === 0 ? classes.bookCover : '',
  );
  const backPage = classNames(classes.bookPage, classes.bookBackPage);

  const setPageDimensions = (height, width) => {
    const numberOfCharacters = Math.round((width / 16) * (height / 16));
    let page = 0;

    let book = content
      .replace(/[\r\n]{2,}/g, '\n')
      .split(' ')
      .reduce((book, word) => {
        if (word === ' ' || word === '') return book;
        if (book[page]) {
          const totalCharCount =
            book[page].join(' ').length + book[page].length;
          if (totalCharCount >= numberOfCharacters) {
            book[page + 1] = [word];
            page++;
          } else {
            book[page].push(word);
          }
        } else {
          book[page] = [word];
        }
        return book;
      }, {});
    book = Object.keys(book)
      .map(key => book[key].join(' '))
      .map((page, index, book) => {
        if (index % 2) return;
        return [book[index], book[index + 1]];
      })
      .filter(Boolean);

    setPages(book);
    setPageHeight(height);
    setPageWidth(width);
  };

  useEffect(() => {
    setPageDimensions(fpRef.current.offsetWidth, fpRef.current.offsetHeight);
    window.addEventListener('resize', () => {
      setPageDimensions(fpRef.current.offsetWidth, fpRef.current.offsetHeight);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setPageDimensions(
          fpRef.current.offsetWidth,
          fpRef.current.offsetHeight,
        );
      });
    };
  }, [pageHeight, pageWidth]);
  console.log(pages);
  let paragraph = [];
  let paragraphTwo = [];
  // const paragraph = pages ? pages[0].split('\n') : []
  // if (pages && typeof pages[pageNumber] === 'string') {
  //   paragraph = pages[pageNumber].split('\n');
  //   if (pages[pageNumber + 1]) {
  //     console.log(pages[pageNumber + 1]);
  //     paragraphTwo = pages[pageNumber + 1].split('\n');
  //   }
  // }
  return (
    <Fragment>
      <div className={classes.wrapper} {...restProps}>
        <div className={classes.bookContainer} ref={fpRef}>
          {pages.map((page, index) => (
            <div
              key={index}
              style={{ backgroundColor: index % 2 ? 'pink' : 'red' }}
            >
              <div>{page[0]}</div>
              <div>{page[1]}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.bookControls}>
        <button
          onClick={() => {
            if (pageNumber <= 0) return;
            setPageNumber(pageNumber - 1);
          }}
        >
          Prev Page
        </button>
        <Typography component="div">
          <input
            value={pageNumber + 1}
            onChange={event => {
              let page = event.target.value;
              if (page >= pages.length || page <= 0) page = 0;
              setPageNumber(page);
            }}
          />{' '}
          / {pages && pages.length}
        </Typography>
        <button
          onClick={() => {
            if (pageNumber >= pages.length - 1) return;
            setPageNumber(pageNumber + 1);
          }}
        >
          Next Page
        </button>
      </div>
    </Fragment>
  );
};

// class Book extends Component {
//   constructor(props) {
//     super(props);
//     this.paraRef = React.createRef();
//     this.backPageRef = React.createRef();

//     this.state = {
//       pageNumber: 0,
//       paragraphs: null,
//     };
//   }

//   componentDidMount() {
//     const { content } = this.props;

//     const bookData = {};
//     bookData.paragraphNumbers = content.split('\n').length;
//     bookData.characterCount = content.split('').length;
//     console.log(bookData);
//     console.log(frontPageRef.current);
//     let paragraphs = this.props.content.split('\n');
//     this.setState({ paragraphs }, () => {});
//   }

//   incrementPage = () => {
//     this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
//   };
//   decrementPage = () => {
//     if (this.state.pageNumber === 0) return;
//     this.setState(prevState => ({ pageNumber: prevState.pageNumber - 1 }));
//   };

//   setWidth = ev => {
//     console.log(ev);
//   };

//   render() {
//     const { classes } = this.props;
//     const { pageNumber, paragraphs } = this.state;

//     const frontPage = classNames(
//       classes.bookPage,
//       classes.bookFrontPage,
//       pageNumber === 0 ? classes.bookCover : '',
//     );
//     const backPage = classNames(classes.bookPage, classes.bookBackPage);

//     if (!paragraphs) {
//       return null;
//     }

//     return (
//       <div className={classes.bookContainer}>
//         <Fragment>
//           <div id="frontPage" className={backPage} ref={this.backPageRef}>
//             <div ref={this.paraRef}>Test</div>
//             Page 2
//           </div>
//           <div className={frontPage} ref={this.frontPageRef}>
//             {paragraphs.map((para, index) => (
//               <Typography variant="body1" key={index}>
//                 {para}
//               </Typography>
//             ))}
//           </div>
//         </Fragment>
//       </div>
//     );
//   }
// }

export default Book;
