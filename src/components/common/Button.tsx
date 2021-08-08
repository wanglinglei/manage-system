
import buttonCss from '../../assets/css/components/common/button.module.scss'

declare interface Ibutton {
  color?: string,
  bgcolor?: string,
  text: string,
  clickAction?: any,
  className?: string
}
interface IbuttonProps {
  buttons: Ibutton[]
}
function Button(props: IbuttonProps) {
  const defaultButtons = [
    {
      text: '取消',
    },
    {
      text: '确认',
    }
  ]
  const buttonClassName = ['leftButton', 'rightButton']
  const buttons = props.buttons || defaultButtons
  return (
    <div className={buttonCss.buttons}>
      {
        buttons.map((value, index) => (
          <div
            key={'button' + index}
            className={value.className || buttonCss[buttonClassName[index]]}
            onClick={value.clickAction}> {value.text}</div>
        ))
      }
    </div>
  )


}
export default Button