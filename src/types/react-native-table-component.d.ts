declare module 'react-native-table-component' {
    import { Component } from 'react';
    import { ViewProps, TextProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
  
    export interface TableProps extends ViewProps {
      borderStyle?: StyleProp<ViewStyle>;
    }
  
    export class Table extends Component<TableProps> {}
  
    export interface RowProps extends ViewProps {
      data: any[];
      style?: StyleProp<ViewStyle>;
      textStyle?: StyleProp<TextStyle>;
    }
  
    export class Row extends Component<RowProps> {}
  
    export interface RowsProps extends ViewProps {
      data: any[][];
      style?: StyleProp<ViewStyle>;
      textStyle?: StyleProp<TextStyle>;
    }
  
    export class Rows extends Component<RowsProps> {}
  }
  