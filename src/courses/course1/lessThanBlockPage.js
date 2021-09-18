module.exports = {
  title: 'BlocklyExample Page',
  type: 'learn',
  sections: [
    {
      type: 'text',
      content: 'run the code below',
    },
    {
      type: 'blocklyExample',
      content: {
        variables: {
          secretMessage: {
            type: 'simple',
            value: "shh, don't tell!!!",
          },
        },
        blocks: `
        <xml xmlns="http://www.w3.org/1999/xhtml">
            <block type="if_do" x="0" y="0">
              <value name="CONDITION">
                <block type="greater_than">
                  <value name="ELEM_1">
                    <block type="math_number">
                      <field name="NUM">2</field>
                    </block>
                  </value>
                  <value name="ELEM_2">
                    <block type="math_number">
                      <field name="NUM">1</field>
                    </block>
                  </value>
                </block>
              </value>
              <statement name="STATEMENT">
                <block type="print_message">
                  <field name="VAR_NAME">execution.variables.secretMessage</field>
                </block>
              </statement>
            </block>
            <block type="print_var" x="0" y="90">
              <value name="VARIABLE">
                <block type="variable">
                  <field name="VAR" id="QJD^+@[RVIwbLSZoDb:V">default</field>
                </block>
              </value>
            </block>
            <block type="edge_weight" x="0" y="140">
              <value name="EDGE">
              </value>
            </block>
        </xml>
        `,
        output: {
          type: 'console',
        },
      },
    },
  ],
};
