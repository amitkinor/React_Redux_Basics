import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { INCREMENT, DECREMENT, ADD, DELETE_RESULT, STORE_RESULT, SUBSTRACT} from '../../store/actions';

class Counter extends Component {
	state = {
		counter: 0,
	};

	render() {
		const {
			ctr,
			onIncrementCounter,
			onDecrementCounter,
			onAddCounter,
			onSubstractCounter,
			onStoreResult,
			onDeleteResult,
			storedResults,
		} = this.props;
		return (
			<div>
				<CounterOutput value={ctr} />
				<CounterControl label="Increment" clicked={onIncrementCounter} />
				<CounterControl label="Decrement" clicked={onDecrementCounter} />
				<CounterControl label="Add 5" clicked={onAddCounter} />
				<CounterControl label="Subtract 5" clicked={onSubstractCounter} />
				<hr />
				<button onClick={()=> onStoreResult(ctr)}>Store Result</button>
				<ul>
					{storedResults.map((result) => {
						return <li id={result.id}	onClick={() => onDeleteResult(result.id)}>{result.value} </li>;
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch({ type: INCREMENT }),
		onDecrementCounter: () => dispatch({ type: DECREMENT }),
		onAddCounter: () => dispatch({ type: ADD, value: 5 }),
		onSubstractCounter: () => dispatch({ type: SUBSTRACT, value: 5 }),
		onStoreResult: (result) => dispatch({ type: STORE_RESULT, result }),
		onDeleteResult: (idToDelete) =>
			dispatch({ type: DELETE_RESULT, idToDelete: idToDelete }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
