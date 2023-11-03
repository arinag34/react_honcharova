import { PropsWithChildren } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectTheme } from '../../store/theme';

function Panel({ title, children }: PropsWithChildren<{ title: string }>) {
  const theme = useAppSelector(selectTheme)

  const className = `panel-${theme}`;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

export default Panel;
