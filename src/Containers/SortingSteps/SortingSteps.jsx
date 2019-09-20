import React, {Component} from "react";
import ArrayHolder from "../../Components/ArrayHolder/arrayHolder";
let sortingSteps = [];
class SortingSteps extends Component {
  state = {
    sortingSteps: []
  };

  updateState = (array, i, j, L, H, action, pivot) => {
    sortingSteps = [
      ...sortingSteps,
      {
        arrayHolder: [...array],
        action: action,
        L: L,
        H: H,
        pivot: pivot,
        i: i,
        j: j
      }
    ];
    this.setState({sortingSteps});
  };

  quickSort = (array, low, high) => {
    if (low < high) {
      //console.log(` L: ${low}, H: ${high}`);
      let j = this.partition(array, low, high);
      this.quickSort(array, low, j);
      this.quickSort(array, j + 1, high);
    }
    //console.log(array);
    return array;
  };

  partition = (array, low, high) => {
    const pivot = array[low];
    console.log(pivot);
    let i = low;
    let j = high;
    while (i < j) {
      //find element greater than pivot
      do {
        i++;
      } while (array[i] <= pivot);
      this.updateState(array, i, j, low, high, "i++");

      //find element lower than pivot
      do {
        j--;
      } while (array[j] > pivot);
      this.updateState(array, i, j, low, high, "j++");

      //if low pointer and high pointer did not crossed each other than swap the values
      if (i < j) {
        this.updateState(array, i, j, low, high, "before-swap");
        this.swap(array, i, j);
        this.updateState(array, i, j, low, high, "after-swap");
      }
    }

    //set pivot element to it's sorted position
    this.updateState(array, i, j, low, high, "before-pivot-swap");
    this.swap(array, low, j);
    this.updateState(array, i, j, low, high, "after-pivot-swap");
    return j;
  };

  unSoted = [5, 2, 1, 7, 5, 3, 2];

  swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };
  setActionArray(step) {
    let actionArray = new Array(step.arrayHolder.length);
    actionArray.fill("");
    actionArray[step.L] += " L ";
    step.H === step.arrayHolder.length
      ? (actionArray[step.H - 1] += " H ")
      : (actionArray[step.H] += " H ");
    actionArray[step.i] += " i ";
    step.j === step.arrayHolder.length
      ? (actionArray[step.j - 1] += " j ")
      : (actionArray[step.j] += " j ");
    actionArray[step.L] += " P ";
    return actionArray;
  }
  render() {
    return (
      <>
        <div
          onClick={() => this.quickSort(this.unSoted, 0, this.unSoted.length)}
        >
          Sort
        </div>
        {this.state.sortingSteps.map(elements => {
          return (
            <>
              <ArrayHolder
                action={elements.action}
                elements={this.setActionArray(elements)}
              />
              <ArrayHolder elements={elements.arrayHolder} />;
            </>
          );
        })}
      </>
    );
  }
}

export default SortingSteps;
