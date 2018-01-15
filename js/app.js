var my_news = [
	
];


var News = React.createClass({
	render: function() {
		var data = this.props.data;
		var newsTemplate;

		if (data.length > 0) {
			newsTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
						<p className="news__author">{item.author}:</p>
						<p className="news__text">{item.text}</p>
					</div>
				)
			})
		}
		else {
			newsTemplate = <p>Have no news</p>;
		} 

		return (
			<div className="news">
				{newsTemplate}
				<strong className={data.length > 0 ? '':'none'}>Number of News: {data.length}</strong>
			</div>
		);
	}
});

var Comments = React.createClass({
	render: function() {
		return (
			<div className="comments">
				No news - no comments
			</div>
		);
	}
 });

var App = React.createClass({
	render: function() {
		return (
			<div className="App">
				Hi everybody, I'm App component! I can display News.
				<News data={my_news} /> {/*add option data */}
				<Comments />
			</div>
		);
	}
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);