<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Guides :visible="false" />
    <Container>
      <Row resetStyle tag="ul" class="test" debug>
        row should be empty
        <Column tag="li" :sm="12" :md="6">
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
      </Row>
    </Container>
    <Container>
      <Row resetStyle tag="ul" >
        <Column tag="li" :sm="12" :md="8" debug>
          <Button @click="debugButton('test')">
            button
          </Button>
        </Column>
        <Column :sm="12" :md="8" debug no-gutter>
          <Button @click="debugButton('test')">
            button
          </Button>
        </Column>
        <Column :sm="12" :md="8" debug>
          <Button @click="debugButton('test')">
            button
          </Button>
        </Column>
      </Row>
    </Container>
    <Container>
      <Row debug>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" :mdShift="8" debug>
          column has gap
          <hidden from="md" until="lg">
            <div class="dumb">
              shown from md to lg
            </div>
          </hidden>
        </Column>
      </Row>
    </Container>
    <Container xl="1200">
      <Row>
        <column>
          <div class="dumb" />
        </Column>
      </Row>
    </Container>
    <Container>
      <Row resetStyle tag="ul" debug>
        row should be empty
        <Column tag="li" :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <Button @click="debugButton('test')">
            button
          </Button>
        </Column>
        <Column :sm="12" :md="6">
          <Button @click="debugButton('test')">
            button
          </Button>
          <Button @click="debugButton('test')">
            button
          </Button>
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
      </Row>
    </Container>
    <Container>
      <Row resetStyle tag="ul" >
        <Column tag="li" :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
      </Row>
    </Container>
    <Container>
      <Row debug>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" :mdShift="8" debug>
          column has gap
          <hidden from="md" until="lg">
            <div class="dumb">
              shown from md to lg
            </div>
          </hidden>
        </Column>
      </Row>
    </Container>
    <Container xl="1200">
      <Row>
        <column>
          <div class="dumb" />
        </Column>
      </Row>
    </Container>
    <Container>
      <Row resetStyle tag="ul" debug>
        row should be empty
        <Column tag="li" :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
      </Row>
    </Container>
    <Container>
      <Row resetStyle tag="ul" >
        <Column tag="li" :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
      </Row>
    </Container>
    <Container>
      <Row debug>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" :mdShift="8" debug>
          column has gap
          <hidden from="md" until="lg">
            <div class="dumb">
              shown from md to lg
            </div>
          </hidden>
        </Column>
      </Row>
    </Container>
    <Container xl="1200">
      <Row>
        <column>
          <div class="dumb" />
        </Column>
      </Row>
    </Container>
    <Container>
      <Row resetStyle tag="ul" debug>
        row should be empty
        <Column tag="li" :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
      </Row>
    </Container>
    <Container>
      <Row resetStyle tag="ul" >
        <Column tag="li" :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
      </Row>
    </Container>
    <Container>
      <Row debug>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" :mdShift="8" debug>
          column has gap
          <hidden from="md" until="lg">
            <div class="dumb">
              shown from md to lg
            </div>
          </hidden>
        </Column>
      </Row>
    </Container>
    <Container xl="1200">
      <Row>
        <column>
          <div class="dumb" />
        </Column>
      </Row>
    </Container>
    <Container>
      <Row resetStyle tag="ul" debug>
        row should be empty
        <Column tag="li" :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
        <Column :sm="12" :md="6">
          <!-- <div class="dumb" /> -->
        </Column>
      </Row>
    </Container>
    <Container>
      <Row resetStyle tag="ul" >
        <Column tag="li" :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
      </Row>
    </Container>
    <Container>
      <Row debug>
        <Column :sm="12" :md="8" debug>
          <div class="dumb" />
        </Column>
        <Column :sm="12" :md="8" :mdShift="8" debug>
          column has gap
          <hidden from="md" until="lg">
            <div class="dumb">
              shown from md to lg
            </div>
          </hidden>
        </Column>
      </Row>
    </Container>
    <Container xl="1200">
      <Row>
        <column>
          <div class="dumb" />
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
