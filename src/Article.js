import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Article extends React.Component {
  state = {
    article: null,
    questions:null
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    axios
      .get("./article.json")
      .then(res => {
        const articles = res.data.articles;
        const questions = res.data.questions;
        const article = articles[Math.floor(Math.random() * articles.length)];
        this.setState({
          article: article,
          questions: questions.find(
            question => question.articleId === article.id
          )
        });
      })
      .catch(e => console.log(e));
  };

  onSubmit = () => {
    this.props.history.push('/thankyou');
  }

  onTextChange = (index, value) => {
    const {questions } =  this.state;
    questions.questions[index].ans = value;
    this.setState({
      questions: {
        ...questions,
      }
    })
  }

  render() {
    const { questions, article } = this.state;
    if (!article) {
      return <div> Loading.....</div>;
    }
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="card" width="100%">
            <img
              className="card-img-top"
              src={article.urlToImage}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              {questions.questions.map((question, index) => {
                return (
                  <div key={index} className="mb-2">
                    <label>{index + 1}. {question.que}</label>
                    {question.options.map((option, key) => {
                     return <div className="form-check" key={key}>
                        <input className="form-check-input" type="radio" id={`option_${index}_${key}`} value="option1" checked={question.ans === option} onChange={(e) => this.onTextChange(index, option)} />
                        <label className="form-check-label" htmlFor={`option_${index}_${key}`}>
                        {option}
                        </label>
                      </div>
                    })}
                  </div>
                );
              })}
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={() => this.onSubmit()}>Submit</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Article);