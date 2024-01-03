import cl from './Footer.module.sass'

export default function Footer() {
  return (
    <footer id={cl.footer}>
      <dl>
        <dt> Menu </dt>
        <dd> Pizza payment </dd>
        <dd> Stock </dd>
        <dd> Burgers Service </dd>
        <dd> Wingsdd </dd>
        <dd> Dessert </dd>
        <dd> Snacks </dd>
        <dd> Dessert </dd>
      </dl>
      <dl>
        <dt> Information </dt>
        <dd> Order and payment </dd>
        <dd> Loyalty program </dd>
        <dd> Terms of Service </dd>
        <dd> Franchise </dd>
        <dd> About company </dd>
      </dl>
      <dl>
        <dt> Appear us </dt>
        <dd> Addresses </dd>
        <dd> Feedback and account deletion </dd>
        <span style={{ display: 'flex' }}>
          <dd>
            {' '}
            <a href="https://vk.com/pizzahutrussia" target="_blank">
              {' '}
              <img src="/photo/icons/icons8-vk-circled.svg" alt="" />{' '}
            </a>{' '}
          </dd>
          <dd>
            {' '}
            <a href="https://t.me/pizzahut_ru" target="_blank">
              {' '}
              <img src="/photo/icons/icons8-telegram.svg" alt="" />{' '}
            </a>{' '}
          </dd>
        </span>
      </dl>
    </footer>
  )
}
