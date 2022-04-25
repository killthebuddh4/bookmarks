import styled from 'styled-components';

interface Bookmark {
	url: string;
	display: string;
}

const BOOKMARKS: Record<string, Bookmark[]> = {
  DOCS: [
    { url: "https://nextjs.org/docs", display: "Nextjs" },
    { url: "https://wagmi.sh/docs/getting-started", display: "wagmi" },
    { url: "https://reactjs.org/docs/getting-started.html", display: "React" },
    { url: "https://styled-components.com/docs", display: "Styled" },
  ]
}

const Card = styled.li`
	border: 3px solid black;
  list-style: none;
  padding: 1rem;
  border-radius: 0.25rem;
`

const Cards = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const Genre = styled.h1`
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Bookmarks = () => {
	return (
    <Cards>
      {Object.entries(BOOKMARKS).map(
        ([key, bookmarks]) => {
          return (
            <Row key={key}>
              <Genre>{key}</Genre>
              {bookmarks.map(bm => {
                return (
                  <a key={bm.url} href={bm.url}>
                    <Card key={bm.url}>
                      {bm.display}
                    </Card>
                  </a>
                );
              })}
            </Row>
          )
        }
      )}
    </Cards>
  );
}

export default Bookmarks;
