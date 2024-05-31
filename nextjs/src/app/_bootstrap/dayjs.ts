/* eslint-disable func-names */
import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/advancedFormat'

const bootstrap = () => {
  dayjs.extend(AdvancedFormat)
}

export default bootstrap
