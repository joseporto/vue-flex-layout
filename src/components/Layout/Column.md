### Responsive

Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md, lg & xl viewport widths.

```vue
<Container nogutter>
  <Row nogutter>
    <Column :xs="12" :sm="3" :md="2" :lg="1">
      <div class="box-row"></div>
    </Column>
    <Column :xs="6" :sm="6" :md="8" :lg="10">
      <div class="box-row"></div>
    </Column>
    <Column :xs="6" :sm="3" :md="2" :lg="1">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xs="12" :sm="3" :md="2" :lg="1">
      <div class="box-row"></div>
    </Column>
    <Column :xs="12" :sm="9" :md="10" :lg="11">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xs="10" :sm="6" :md="8" :lg="10">
      <div class="box-row"></div>
    </Column>
    <Column :xs="2" :sm="6" :md="4" :lg="2">
      <div class="box-row"></div>
    </Column>
  </Row>
</Container>
```

### Fluid

Percent based widths allow fluid resizing of columns and rows.

```vue
<Container nogutter>
  <Row nogutter>
    <Column :xs="12">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xs="1">
      <div class="box-row"></div>
    </Column>
    <Column :xs="11">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xs="2">
      <div class="box-row"></div>
    </Column>
    <Column :xs="10">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xs="3">
      <div class="box-row"></div>
    </Column>
    <Column :xs="9">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xs="4">
      <div class="box-row"></div>
    </Column>
    <Column :xs="8">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xs="5">
      <div class="box-row"></div>
    </Column>
    <Column :xs="7">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xs="6">
      <div class="box-row"></div>
    </Column>
    <Column :xs="6">
      <div class="box-row"></div>
    </Column>
  </Row>
</Container>
```

### Shift

Shift a column by breakpoint with `xsshift`, `smshift`, `mdshift`, `lgshift` and `xlshift`.

```vue
<Container nogutter>
  <Row nogutter>
    <Column :xsshift="11" :xs="1">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xsshift="10" :xs="2">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xsshift="9" :xs="3">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xsshift="8" :xs="4">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xsshift="7" :xs="5">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xsshift="6" :xs="6">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xsshift="5" :xs="7">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xsshift="4" :xs="8">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xsshift="3" :xs="9">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xsshift="2" :xs="10">
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column :xsshift="1" :xs="11">
      <div class="box-row"></div>
    </Column>
  </Row>
</Container>
```

### Auto width

```vue
<Container nogutter>
  <Row nogutter>
    <Column xs>
      <div class="box-row"></div>
    </Column>
    <Column xs>
      <div class="box-row"></div>
    </Column>
  </Row>
  <Row nogutter>
    <Column xs>
      <div class="box-row"></div>
    </Column>
    <Column xs>
      <div class="box-row"></div>
    </Column>
    <Column xs>
      <div class="box-row"></div>
    </Column>
  </Row>
</Container>
```

### Nested Grids

Nest grids inside grids inside grids.

```vue
<Row>
  <Column :xs="7">
    <div class="box box-container">
      <Row>
        <Column :xs="9">
          <div class="box-first box-container">
            <Row>
              <Column :xs="4">
                <div class="box-first"></div>
              </Column>
              <Column :xs="8">
                <div class="box-first"></div>
              </Column>
            </Row>
          </div>
        </Column>
        <Column :xs="3">
          <div class="box-first box-container">
            <Row>
              <Column :xs="true">
                <div class="box-first"></div>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>
    </div>
  </Column>
  <Column :xs="5">
    <div class="box box-container">
      <Row>
        <Column :xs="12">
          <div class="box-first box-container">
            <Row>
              <Column :xs="6">
                <div class="box-first"></div>
              </Column>
              <Column :xs="6">
                <div class="box-first"></div>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>
    </div>
  </Column>
</Row>
```

### Reordering

Add classes to reorder columns.

`first`

```vue
<Row>
  <Column :xs="12">
    <div class="box box-container">
      <Row>
        <Column :xs="2">
          <div class="box-first">1</div>
        </Column>
        <Column :xs="2">
          <div class="box-first">2</div>
        </Column>
        <Column :xs="2">
          <div class="box-first">3</div>
        </Column>
        <Column :xs="2">
          <div class="box-first">4</div>
        </Column>
        <Column :xs="2">
          <div class="box-first">5</div>
        </Column>
        <Column :xs="2" first>
          <div class="box-highlighted">6</div>
        </Column>
      </Row>
    </div>
  </Column>
</Row>
```

`last`

```vue
<Row>
  <Column :xs="12">
    <div class="box box-container">
      <Row>
        <Column :xs="2" last>
          <div class="box-highlighted">1</div>
        </Column>
        <Column :xs="2">
          <div class="box-first">2</div>
        </Column>
        <Column :xs="2">
          <div class="box-first">3</div>
        </Column>
        <Column :xs="2">
          <div class="box-first">4</div>
        </Column>
        <Column :xs="2">
          <div class="box-first">5</div>
        </Column>
        <Column :xs="2">
          <div class="box-first">6</div>
        </Column>
      </Row>
    </div>
  </Column>
</Row>
```
