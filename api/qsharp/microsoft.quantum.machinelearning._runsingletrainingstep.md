---
uid: Microsoft.Quantum.MachineLearning._RunSingleTrainingStep
title: _RunSingleTrainingStep operation
ms.date: 6/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.MachineLearning
qsharp.name: _RunSingleTrainingStep
qsharp.summary: attempts a single parameter update in the direction of mini batch gradient
---

# _RunSingleTrainingStep operation

Namespace: [Microsoft.Quantum.MachineLearning](xref:Microsoft.Quantum.MachineLearning)

Package: [Microsoft.Quantum.MachineLearning](https://nuget.org/packages/Microsoft.Quantum.MachineLearning)


attempts a single parameter update in the direction of mini batch gradient

```qsharp
operation _RunSingleTrainingStep (miniBatch : (Microsoft.Quantum.MachineLearning.LabeledSample, Microsoft.Quantum.MachineLearning.StateGenerator)[], options : Microsoft.Quantum.MachineLearning.TrainingOptions, model : Microsoft.Quantum.MachineLearning.SequentialModel) : (Double, Microsoft.Quantum.MachineLearning.SequentialModel)
```


## Input

### miniBatch : ([LabeledSample](xref:Microsoft.Quantum.MachineLearning.LabeledSample),[StateGenerator](xref:Microsoft.Quantum.MachineLearning.StateGenerator))[]

container of labeled samples in the mini batch


### options : [TrainingOptions](xref:Microsoft.Quantum.MachineLearning.TrainingOptions)

Training options to be used when running the given training step.


### model : [SequentialModel](xref:Microsoft.Quantum.MachineLearning.SequentialModel)

The sequential model to be trained.



## Output : ([Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals),[SequentialModel](xref:Microsoft.Quantum.MachineLearning.SequentialModel))

(utility, (new)parameters) pair