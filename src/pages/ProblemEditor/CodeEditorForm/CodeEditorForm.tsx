import Editor from "@monaco-editor/react";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/common/hooks";
import { isBlank } from "../../../shared/utils";
import {
  CodeEditorFields,
  updateCodeEditor,
  validateCode,
} from "../ProblemEditorContainer/problemEditorContainerSlice";

interface Props {
  formRef: any;
}

interface FlattenedCodeFields {
  fileExtension: string;
  header: string;
  body: string;
  footer: string;
}

interface Errors {
  fileExtension?: string;
  header?: string;
  body?: string;
  footer?: string;
}

const defaultHeader = `//If students import packages or use namespaces on their own, it shouldn't cause problems
#include <iostream>
#include <vector>
#include <sstream>
#include <queue>
using namespace std;

//Classes, functions, and variables with the same name created within the same scope will cause errors though.
class Node {
  public:
  int value;
  Node* next = NULL;
};

class TreeNode {
  public:
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
`;

const defaultBody = `int addTwoNums(int x, int y) {
	// Your code here
}
`;

const defaultFooter = `// The main does not have to be in the footer.
// The main should remain in the footer if you don't want students to be able to see it nor change it.
int main()
{
  int x = 0, y = 0;
  cin >> x >> y;
  int result = addTwoNums(x, y);
  // You should print out whatever the expected output should be. 
  // Be careful about whitespace. Ex: only put endl if you add an endline in your expected output.
  cout << result;
  /*
  //Gator UnorderedMap main as an example
  int lines = 0, buckets = 0;
  double maxLoadFactor = 0.0;
  std::string command = "", ufid = "", name = "", key = "";
  std::cin >> lines >> buckets >> maxLoadFactor;
  UnorderedMap myMap = UnorderedMap(buckets, maxLoadFactor);
  while(lines--)
  {
    std::cin >> command;
    if(command == "hash")
    {
      std::cin >> key;
      const char* convertedKey = key.c_str();
      std::cout << hashFunction(convertedKey, buckets) << "\\n";
    }
    else if(command == "insert") 
    {
      std::cin >> ufid >> name;
      myMap[ufid] = name;
    }
    else if(command == "size") 
    {
      std::cout << myMap.size() <<"\\n";
    }
    else if(command == "load") 
    {
      std::cout << std::fixed << std::setprecision(2) << myMap.loadFactor() <<"\\n";
    }
    else if(command == "search")
    {
      std::cin >> ufid;
      std::cout << myMap[ufid] << "\\n";
    }
    else if(command == "traverse")
    {
      for (UnorderedMap::Iterator iter = myMap.begin(); iter != myMap.end(); ++iter) 
      {
        std::cout << (*iter).first << " " << (*iter).second << "\\n";
      }
    }
    else if(command == "remove")
    {
      std::cin >> ufid;
      myMap.remove(ufid);
    }  
  }
  */
  return 0;
}
`;

export const CodeEditorForm = ({ formRef }: Props) => {
  const dispatch = useDispatch();

  const [touched, setTouched] = React.useState(false);

  const initialValues = useAppSelector((state) => {
    const formattedFields: CodeEditorFields =
      state.problemEditorContainer.codeEditor;
    const fileExtension = formattedFields.fileExtension;
    const code = formattedFields.code;
    const flattenedFields: FlattenedCodeFields = {
      fileExtension,
      ...code,
    };
    return flattenedFields;
  });

  if (
    !touched &&
    isBlank(initialValues.header) &&
    isBlank(initialValues.body) &&
    isBlank(initialValues.footer)
  ) {
    initialValues.header = defaultHeader;
    initialValues.body = defaultBody;
    initialValues.footer = defaultFooter;
  }

  const validation = (values: FlattenedCodeFields) => {
    const errors: Errors = {};
    dispatch(validateCode(Object.entries(errors).length === 0));
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const formattedFields: CodeEditorFields = {
          fileExtension: values.fileExtension,
          code: {
            header: values.header,
            body: values.body,
            footer: values.footer,
          },
        };
        dispatch(updateCodeEditor(formattedFields));
      }}
      innerRef={formRef}
      validate={validation}
    >
      {({
        errors,
        values,
        handleChange,
        handleBlur,
        touched,
        setFieldValue,
      }) => (
        <Form>
          <Stack overflow="auto" spacing={5}>
            <Box>
              <InputLabel>Header</InputLabel>
              <FormHelperText>
                This code precedes the body and is not visible to students.
              </FormHelperText>
              <Paper
                elevation={0}
                variant="outlined"
                sx={{ marginTop: 1, paddingTop: 1 }}
              >
                <Editor
                  language="cpp"
                  height="250px"
                  value={values.header}
                  onChange={(value) => {
                    setFieldValue("header", value);
                    setTouched(true);
                  }}
                />
              </Paper>
            </Box>
            <Box>
              <InputLabel>Body</InputLabel>
              <FormHelperText>This code is visible to students.</FormHelperText>
              <Paper
                elevation={0}
                variant="outlined"
                sx={{ marginTop: 1, paddingTop: 1 }}
              >
                <Editor
                  language="cpp"
                  height="250px"
                  value={values.body}
                  onChange={(value) => {
                    setFieldValue("body", value);
                    setTouched(true);
                  }}
                />
              </Paper>
            </Box>
            <Box flexGrow={1} display="flex" flexDirection="column">
              <InputLabel>Footer</InputLabel>
              <FormHelperText>
                This code follows the body and is not visible to students.
              </FormHelperText>
              <Paper
                elevation={0}
                variant="outlined"
                sx={{ marginTop: 1, paddingTop: 1 }}
              >
                <Editor
                  language="cpp"
                  height="250px"
                  value={values.footer}
                  onChange={(value) => {
                    setFieldValue("footer", value);
                    setTouched(true);
                  }}
                />
              </Paper>
            </Box>
            <Box>
              <FormControl>
                <InputLabel>Codebox file extension</InputLabel>
                <Select
                  name="fileExtension"
                  value={values.fileExtension}
                  label="fileExtension"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ minWidth: "10rem" }}
                  variant="filled"
                >
                  <MenuItem value=".h">.h</MenuItem>
                  <MenuItem value=".cpp">.cpp</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
