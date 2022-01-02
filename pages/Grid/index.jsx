import {Component} from "react";
import styles from './Index.module.less'

class Index extends Component {

    render() {
        return <div>
            <div className={`${styles.grid}`}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
                    return <div key={item} className={''}><p className={''}>{item}</p></div>
                })}
            </div>
        </div>
    }


}

export default Index
