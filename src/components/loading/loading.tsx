import { clsx } from 'clsx'

import s from './loading.module.scss'

type Loading = {
  className?: string
}

export const Loadings = (props: Loading) => {
  const { className } = props
  const classNames = {
    loadings: clsx(s.loader, className),
  }

  return <div className={classNames.loadings}></div>
}
