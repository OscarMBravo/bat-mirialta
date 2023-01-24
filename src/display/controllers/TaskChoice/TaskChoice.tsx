/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

import Box from '@mui/material/Box';

import FormChoice from '@/display/controllers/FormChoice';
import TenseChoice from '@/display/controllers/TenseChoice';
import VerbChoice from '@/display/controllers/VerbChoice';
import usePopulateVerbsTensesForms from '@/hooks/usePopulateVerbsTensesForms';
import { useQuestionIDs, useSelectedTense, useSelectedVerb, useShowStart } from '@/store/scripts';

const TaskChoice = () => {
  const { selectedVerb, setSelectedVerb } = useSelectedVerb();
  const { selectedTense, setSelectedTense } = useSelectedTense();
  const populateVerbsTensesForms = usePopulateVerbsTensesForms();

  const { setQuestionIDs } = useQuestionIDs();
  const { setShowStart } = useShowStart();

  useEffect(() => {
    populateVerbsTensesForms();
    setQuestionIDs([]);
    setSelectedVerb(undefined);
    setSelectedTense(undefined);
    setShowStart(false);
  }, []);

  return (
    <Box>
      <Box>
        <VerbChoice />
      </Box>
      {selectedVerb !== undefined && (
        <Box>
          <TenseChoice />
        </Box>
      )}
      {selectedVerb !== undefined && selectedTense !== undefined && (
        <Box>
          <FormChoice />
        </Box>
      )}
    </Box>
  );
};

export default TaskChoice;
