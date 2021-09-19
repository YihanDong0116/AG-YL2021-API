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
          <block type="print_message" x="0" y="0">
            <field name="VAR_NAME">execution.variables.secretMessage</field>
          </block>
          <block type="set_to" x="0" y="60">
            <value name="VAR">
              <block type="distance_from_to">
                <value name="NODE_1">
                </value>
                <value name="NODE_2">
                </value>
              </block>
            </value>
            <value name="VALUE">
              <block type="math_number">
                <field name="NUM">0</field>
              </block>
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
