import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { AppProvider } from '../utils/store'

describe('App', () => {
  it('renders without crashing', () => {
    const router = createMemoryRouter(
      [{ path: '/', element: <div data-testid="home">Home</div> }],
      { initialEntries: ['/'] }
    )

    const { container } = render(
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    )
    expect(container).toBeTruthy()
    expect(screen.getByTestId('home')).toBeTruthy()
  })

  it('shows 404 for unknown routes', async () => {
    const { ErrorPage404 } = await import('../app/components/ErrorStates')
    const router = createMemoryRouter([{ path: '*', element: <ErrorPage404 /> }], {
      initialEntries: ['/nonexistent-page'],
    })

    render(
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    )
    expect(screen.getByText(/page not found/i)).toBeTruthy()
  })
})
