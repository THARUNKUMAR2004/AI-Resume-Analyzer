"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, UploadCloud, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ResumeUploadProps {
  onContinue?: () => void;
}

type UploadState = "idle" | "uploading" | "uploaded";

const ACCEPTED_EXTENSIONS = [".pdf", ".docx"];

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function ResumeUpload({ onContinue }: ResumeUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileExtensionText = useMemo(
    () => ACCEPTED_EXTENSIONS.map((ext) => ext.toUpperCase()).join(", "),
    []
  );

  const validateFile = (nextFile: File) => {
    const validExtension = ACCEPTED_EXTENSIONS.some((ext) =>
      nextFile.name.toLowerCase().endsWith(ext)
    );
    if (!validExtension) return "Please upload a PDF or DOCX resume.";
    if (nextFile.size > 8 * 1024 * 1024) return "File is too large (max 8MB).";
    return null;
  };

  const processUpload = async (nextFile: File) => {
    const validationError = validateFile(nextFile);
    if (validationError) {
      setError(validationError);
      setFile(null);
      setUploadState("idle");
      setProgress(0);
      return;
    }

    setError(null);
    setFile(nextFile);
    setUploadState("uploading");
    setProgress(0);

    for (let i = 1; i <= 100; i += 5) {
      setProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 25));
    }

    setUploadState("uploaded");
  };

  const handleFileInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextFile = event.target.files?.[0];
    if (!nextFile) return;
    await processUpload(nextFile);
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(false);
    const nextFile = event.dataTransfer.files?.[0];
    if (!nextFile) return;
    await processUpload(nextFile);
  };

  const resetUpload = () => {
    setFile(null);
    setProgress(0);
    setUploadState("idle");
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-slate-200/80 p-6 dark:border-white/10">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Upload Resume
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Drag and drop your resume or browse files ({fileExtensionText}).
        </p>
      </div>

      <div className="space-y-5 p-6">
        <motion.div
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragActive(true);
          }}
          onDragLeave={() => setIsDragActive(false)}
          onDrop={handleDrop}
          className={cn(
            "rounded-2xl border-2 border-dashed p-8 text-center transition-colors",
            isDragActive
              ? "border-brand-500 bg-brand-50/80 dark:bg-brand-500/10"
              : "border-slate-300/80 bg-slate-50 dark:border-white/15 dark:bg-white/5"
          )}
        >
          <UploadCloud className="mx-auto h-10 w-10 text-brand-500" />
          <p className="mt-4 text-sm font-medium text-slate-800 dark:text-slate-200">
            Drag and drop a resume file here
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Supported formats: {fileExtensionText}
          </p>

          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED_EXTENSIONS.join(",")}
            onChange={handleFileInput}
            className="hidden"
          />

          <Button
            className="mt-5"
            variant="outline"
            onClick={() => inputRef.current?.click()}
          >
            Choose file
          </Button>
        </motion.div>

        <AnimatePresence mode="wait">
          {error ? (
            <motion.p
              key="upload-error"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-sm text-rose-500"
            >
              {error}
            </motion.p>
          ) : null}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {file ? (
            <motion.div
              key="file-preview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="rounded-xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="rounded-lg bg-brand-500/10 p-2 text-brand-600 dark:text-brand-400">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={resetUpload}
                  aria-label="Remove uploaded file"
                  className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-brand-500"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                {uploadState === "uploaded"
                  ? "Upload complete. Ready for ATS analysis."
                  : "Uploading resume..."}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="flex justify-end">
          <Button
            onClick={onContinue}
            disabled={uploadState !== "uploaded"}
            className="min-w-40"
          >
            Start analysis
          </Button>
        </div>
      </div>
    </Card>
  );
}
