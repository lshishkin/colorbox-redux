import { CLICK } from "../actions/click-actions";

const click = (state = {}, action) => {
    switch (action.type) {
        case CLICK: {
            const { value } = action
            const id=value
            var data = [...state.blocks]
            var index = data.findIndex(obj => obj.id === id)
            var secondId = id === 1 ? 2 : id % 2 ? id + 1 : id - 1
            var secondIndex = data.findIndex(obj => obj.id === secondId)
            data[index].visable = true
            if (data[secondIndex].visable === true) {
                data[index].pass = true
                data[secondIndex].pass = true
            }
        }
        default: {
            return data;
        }
    }
};

export default click;


handleClick(e) {
    const id = +e.target.id
    const self = this
    var data = [...this.state.blocks]
    var index = data.findIndex(obj => obj.id === id)
    var secondId = id === 1 ? 2 : id % 2 ? id + 1 : id - 1
    var secondIndex = data.findIndex(obj => obj.id === secondId)
    data[index].visable = true
    if (data[secondIndex].visable === true) {
        data[index].pass = true
        data[secondIndex].pass = true
    }
    this.setState({ data })
    /*setTimeout(function () {
        data[index].visable = false
        self.setState({ data })
    }, 2000)
    if (data.every(val => val.pass)) {
        this.setState({ win: true })
    }*/
}