import React, {Component} from "react";
import ArrayHolder from "../../Components/ArrayHolder/arrayHolder";
let arrayHolder = [];
class SortingSteps extends Component {
  state = {
    sortingSteps: []
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
    //console.log(pivot);
    let i = low;
    let j = high;
    while (i < j) {
      //find element greater than pivot
      do {
        i++;
      } while (array[i] <= pivot);

      //find element lower than pivot
      do {
        j--;
      } while (array[j] > pivot);

      //if low pointer and high pointer did not crossed each other than swap the values
      if (i < j) {
        this.swap(array, i, j);
      }
    }
    //set pivot element to it's sorted position
    this.swap(array, low, j);
    return j;
  };

  unSoted = [5, 2, 1, 7, 5, 3, 2];

  swap = (array, index1, index2) => {
    arrayHolder = [...arrayHolder, [...array]];
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    this.setState({sortingSteps: arrayHolder});
  };

  render() {
    return (
      <>
        <div
          onClick={() => this.quickSort(this.unSoted, 0, this.unSoted.length)}
        >
          Sort
        </div>
        {this.state.sortingSteps.map(elements => {
          return <ArrayHolder elements={elements} />;
        })}
      </>
    );
  }
}

export default SortingSteps;
