### Horizontal Alignment

Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.

`align="start"` or `top`

```vue
<Row nogutter>
  <Column :xs="12" nogutter>
    <div class="box box-container">
      <Row justify="start" nogutter>
        <Column :xs="6" nogutter>
          <div class="box-nested"></div>
        </Column>
      </Row>
    </div>
  </Column>
</Row>
```

`align="center"` or `middle`

```vue
<Row nogutter>
  <Column :xs="12" nogutter>
    <div class="box box-container">
      <Row justify="center" nogutter>
        <Column :xs="6" nogutter>
          <div class="box-nested"></div>
        </Column>
      </Row>
    </div>
  </Column>
</Row>
```

`align="end"` or `bottom`

```vue
<Row nogutter>
  <Column :xs="12" nogutter>
    <div class="box box-container">
      <Row justify="end" nogutter>
        <Column :xs="6" nogutter>
          <div class="box-nested"></div>
        </Column>
      </Row>
    </div>
  </Column>
</Row>
```

### Vertical alignment

`justify="start"` or `left`

```vue
<Row align="start">
  <Column :xs="6">
    <div class="box-large"></div>
  </Column>
  <Column :xs="6">
    <div class="box"></div>
  </Column>
</Row>
```

`justify="center"` or `center`

```vue
<Row align="center">
  <Column :xs="6">
    <div class="box-large"></div>
  </Column>
  <Column :xs="6">
    <div class="box"></div>
  </Column>
</Row>
```

`justify="end"` or `right`

```vue
<Row align="end">
  <Column :xs="6">
    <div class="box-large"></div>
  </Column>
  <Column :xs="6">
    <div class="box"></div>
  </Column>
</Row>
```

### Distribution

Add classes to distribute the contents of a row or column.

`justify="around"` or `around`

```vue
<Row>
  <Column :xs="12">
    <div class="box box-container">
      <Row justify="around">
        <Column :xs="2">
          <div class="box-nested"></div>
        </Column>
        <Column :xs="2">
          <div class="box-nested"></div>
        </Column>
        <Column :xs="2">
          <div class="box-nested"></div>
        </Column>
      </Row>
    </div>
  </Column>
</Row>
```

`justify="between"` or `between`

```vue
<Row>
  <Column :xs="12">
    <div class="box box-container">
      <Row justify="between">
        <Column :xs="2">
          <div class="box-nested"></div>
        </Column>
        <Column :xs="2">
          <div class="box-nested"></div>
        </Column>
        <Column :xs="2">
          <div class="box-nested"></div>
        </Column>
      </Row>
    </div>
  </Column>
</Row>
```

`justify="evenly"` or `evenly`

```vue
<Row>
  <Column :xs="12">
    <div class="box box-container">
      <Row justify="evenly">
        <Column :xs="2">
          <div class="box-nested"></div>
        </Column>
        <Column :xs="2">
          <div class="box-nested"></div>
        </Column>
        <Column :xs="2">
          <div class="box-nested"></div>
        </Column>
      </Row>
    </div>
  </Column>
</Row>
```

### Reversing

`reverse`

```vue
<Row>
  <Column :xs="12">
    <div class="box box-container">
      <Row reverse>
        <Column :xs="2">
          <div class="box-nested">1</div>
        </Column>
        <Column :xs="2">
          <div class="box-nested">2</div>
        </Column>
        <Column :xs="2">
          <div class="box-nested">3</div>
        </Column>
        <Column :xs="2">
          <div class="box-nested">4</div>
        </Column>
        <Column :xs="2">
          <div class="box-nested">5</div>
        </Column>
        <Column :xs="2">
          <div class="box-nested">6</div>
        </Column>
      </Row>
    </div>
  </Column>
</Row>
```
