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
        </xml>
        `,
        output: {
          type: 'console',
        },
      },
    },
  ],
};
