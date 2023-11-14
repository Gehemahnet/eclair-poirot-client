module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'plugin:vue/vue3-strongly-recommended'
  ],
  rules: {
    'vue/component-tags-order': ['error', {
      order: [
        'template',
        'script',
        'style'
      ]
    }],
    // "vue/component-api-style": ["error", ["script-setup"]],
    'vue/block-lang': ['error',
      {
        script: {
          lang: 'ts'
        }
      }
    ],
    'vue/multi-word-component-names': ['error', {
      ignores: ['index', '[...slug]']
    }],
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
      maxEmptyLines: 1
    }],
    'vue/no-lone-template': ['error', {
      ignoreAccessible: false
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: true,
      ignores: []
    }],
    'vue/custom-event-name-casing': ['error',
      'kebab-case',
      {
        ignores: []
      }
    ],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits']
    }],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/no-empty-component-block': ['error'],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-required-prop-with-default': ['error'],
    'vue/no-static-inline-styles': ['error', {
      allowBinding: false
    }],
    'vue/no-useless-v-bind': ['error'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/v-for-delimiter-style': ['error', 'in']
  }
}
