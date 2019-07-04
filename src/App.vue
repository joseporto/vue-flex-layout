<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.svg" height="128">
    <Guides :visible="false" />



    <Section>
      <h2>Example: Equal-width</h2>
      <Container style="lineHeight: '32px'">
        <Row debug>
          <Column debug>1 of 2</Column>
          <Column debug>2 of 2</Column>
        </Row>
        <br />
        <Row debug>
          <Column debug>1 of 3</Column>
          <Column debug>2 of 3</Column>
          <Column debug>3 of 3</Column>
        </Row>
      </Container>
    </Section>

    <Section>
      <h2>Example: Stacked to horizontal</h2>
      <Container fluid style="lineHeight: '32px'">
        <Row debug>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
          <Column :md="1" debug>md=1</Column>
        </Row>
        <br />
        <Row debug>
          <Column :md="8" debug>md=8</Column>
          <Column :md="4" debug>md=4</Column>
        </Row>
        <br />
        <Row debug>
          <Column :md="4" debug>md=4</Column>
          <Column :md="4" debug>md=4</Column>
          <Column :md="4" debug>md=4</Column>
        </Row>
        <br />
        <Row debug>
          <Column :md="6" debug>md=6</Column>
          <Column :md="6" debug>md=6</Column>
        </Row>
      </Container>
    </Section>

    <Section>
      <h2>Example: Mix and match</h2>
      <Container fluid style="lineHeight: '32px'">
        <Row debug>
          <Column :xs="12" :md="8" debug>xs=12 md=8</Column>
          <Column :xs="6" :md="4" debug>xs=6 md=4</Column>
        </Row>
        <br />
        <Row debug>
          <Column :xs="6" :md="4" debug>xs=6 md=4</Column>
          <Column :xs="6" :md="4" debug>xs=6 md=4</Column>
          <Column :xs="6" :md="4" debug>xs=6 md=4</Column>
        </Row>
        <br />
        <Row debug>
          <Column :xs="6" debug>xs=6</Column>
          <Column :xs="6" debug>xs=6</Column>
        </Row>
      </Container>
    </Section>

    <Section>
      <h2>Example: Column wrapping</h2>
      <Container fluid style="lineHeight: '32px'">
        <Row debug>
          <Column :xs="9" debug>xs=9</Column>
          <Column :xs="4" debug>xs=4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide Col gets wrapped onto a new line as one contiguous unit.</Column>
          <Column :xs="6" debug>xs=6<br/>Subsequent columns continue along the new line.</Column>
        </Row>
      </Container>
    </Section>

    <Section>
      <h2>Example: Vertical alignment</h2>
      <Container fluid style="lineHeight: '32px'">
        <Row align="start" style="height: '75px'" debug>
          <Column debug>1 of 3</Column>
          <Column debug>2 of 3</Column>
          <Column debug>3 of 3</Column>
        </Row>
        <br />
        <Row align="center" style="height: '75px'" debug>
          <Column debug>1 of 3</Column>
          <Column debug>2 of 3</Column>
          <Column debug>3 of 3</Column>
        </Row>
        <br />
        <Row align="end" style="height: '75px'" debug>
          <Column debug>1 of 3</Column>
          <Column debug>2 of 3</Column>
          <Column debug>3 of 3</Column>
        </Row>
        <br />
        <Row align="stretch" debug>
          <Column debug>1 of 3</Column>
          <Column debug>2 of 3</Column>
          <Column debug>3 of 3</Column>
        </Row>
      </Container>
    </Section>

    <Section>
      <h2>Example: Horizontal alignment</h2>
      <Container fluid style="lineHeight: '32px'">
        <Row justify="start" debug>
          <Column :xs="3" debug>1 of 3</Column>
          <Column :xs="3" debug>2 of 3</Column>
          <Column :xs="3" debug>3 of 3</Column>
        </Row>
        <br />
        <Row justify="center" debug>
          <Column :xs="3" debug>1 of 3</Column>
          <Column :xs="3" debug>2 of 3</Column>
          <Column :xs="3" debug>3 of 3</Column>
        </Row>
        <br />
        <Row justify="end" debug>
          <Column :xs="3" debug>1 of 3</Column>
          <Column :xs="3" debug>2 of 3</Column>
          <Column :xs="3" debug>3 of 3</Column>
        </Row>
        <br />
        <Row justify="between" debug>
          <Column :xs="3" debug>1 of 3</Column>
          <Column :xs="3" debug>2 of 3</Column>
          <Column :xs="3" debug>3 of 3</Column>
        </Row>
        <br />
        <Row justify="around" debug>
          <Column :xs="3" debug>1 of 3</Column>
          <Column :xs="3" debug>2 of 3</Column>
          <Column :xs="3" debug>3 of 3</Column>
        </Row>
        <br />
        <Row justify="initial" debug>
          <Column :xs="3" debug>1 of 3</Column>
          <Column :xs="3" debug>2 of 3</Column>
          <Column :xs="3" debug>3 of 3</Column>
        </Row>
        <br />
        <Row justify="inherit" debug>
          <Column :xs="3" debug>1 of 3</Column>
          <Column :xs="3" debug>2 of 3</Column>
          <Column :xs="3" debug>3 of 3</Column>
        </Row>
      </Container>
    </Section>

    <Section>
      <h2>Example: Offsetting columns</h2>
      <Container fluid style="lineHeight: '32px'">
        <Row debug>
          <Column :md="4" debug>md=4</Column>
          <Column :md="4" :mdShift="4" debug>md=4 offset-md=4</Column>
        </Row>
        <br />
        <Row debug>
          <Column :md="3" mdShift="3" debug>md=3 offset-md=3</Column>
          <Column :md="3" mdShift="3" debug>md=3 offset-md=3</Column>
        </Row>
        <br />
        <Row debug>
          <Column :md="6" mdShift="3" debug>md=6 offset-md=3</Column>
        </Row>
      </Container>
    </Section>

    <Section>
      <h2>Example: Nesting columns</h2>
      <Container fluid style="lineHeight: '32px'">
        <Row debug>
          <Column :sm="9" debug>
            Level 1: sm=9
            <Row>
              <Column :xs="8" :sm="6" debug>
                Level 2: xs=8 sm=6
              </Column>
              <Column :xs="4" :sm="6" debug>
                Level 2: xs=4 sm=6
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Section>

    <Section>
      <h2>Example: Custom gutter width</h2>
      <Container fluid style="lineHeight: '32px'">
        <Row nogutter debug>
          <Column :md="8" debug>md=8</Column>
          <Column :md="4" debug>md=4</Column>
        </Row>
        <br />
        <Row gutterWidth={16} debug>
          <Column :md="8" debug>md=8</Column>
          <Column :md="4" debug>md=4</Column>
        </Row>
      </Container>
    </Section>

    <Section>
      <h2>Example: Column width adapted to content</h2>
      <Container fluid style="lineHeight: '32px'">
        <Row debug>
          <Column debug>Logo (Flexible column)</Column>
          <Column xs="content" debug> Menu with x-items</Column>
        </Row>
      </Container>
    </Section>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
html, body {
  background: #ddd;
  color: #111;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  > img {
    margin-bottom: 60px;
  }
}

section {
  border-radius: 5px;
  border: solid 1px #ddd;
  margin: 0 16px 10px 16px;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
  padding-bottom: 8px;
  h2 {
    background: #eee;
    border-bottom: solid 1px #ddd;
    padding: 8px;
    margin-bottom: 10px;
  }
}
</style>
